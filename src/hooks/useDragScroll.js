// src/hooks/useDragScroll.js
import { useRef, useEffect, useState, useCallback } from 'react';

export function useDragScroll() {
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e) => {
      // Touch sudah ditangani native oleh overflow-x-auto
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      isDown = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };

    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        el.classList.add('dragging');
      }
      if (moved) el.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('dragging');
      if (!moved) return;

      // Snap manual ke card terdekat
      const cards = Array.from(el.children);
      const nearest = cards.reduce((a, b) =>
        Math.abs(b.offsetLeft - el.scrollLeft) < Math.abs(a.offsetLeft - el.scrollLeft) ? b : a
      );
      el.scrollTo({ left: nearest.offsetLeft, behavior: 'smooth' });
    };

    // Cegah klik link/card setelah drag
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();

    return () => {
      el.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = useCallback((dir) => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.offsetWidth + 24; // lebar card + gap
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: 0 });
    updateArrows();
  }, [updateArrows]);

  return { ref, canPrev, canNext, scrollByCard, reset };
}