function todayKey(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function diffDays(targetIsoDate: string): number {
  const [y, m, d] = targetIsoDate.split("-").map(Number);
  const target = new Date(y!, (m ?? 1) - 1, d ?? 1);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const ms = target.getTime() - today.getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

function applyState(card: HTMLElement, today: string): void {
  const date = card.getAttribute("data-date");
  if (!date) return;

  card.classList.remove("is-locked", "is-today", "is-past");

  if (date < today) {
    card.classList.add("is-past");
  } else if (date === today) {
    card.classList.add("is-today");
  } else {
    card.classList.add("is-locked");
    const remaining = diffDays(date);
    const label = card.querySelector<HTMLElement>(".countdown-text");
    if (label) {
      label.innerHTML =
        remaining === 1
          ? "Falta <strong>1</strong> día"
          : `Faltan <strong>${remaining}</strong> días`;
    }
  }
}

function attachClickGuard(card: HTMLAnchorElement): void {
  card.addEventListener("click", (event) => {
    if (card.classList.contains("is-locked")) {
      event.preventDefault();
      card.classList.remove("is-shaking");
      void card.offsetWidth;
      card.classList.add("is-shaking");
      const label = card.querySelector<HTMLElement>(".countdown-text");
      if (label) {
        label.classList.add("animate-pulse-soft");
        window.setTimeout(() => label.classList.remove("animate-pulse-soft"), 1200);
      }
    }
  });
}

export function initLockState(): void {
  const today = todayKey();
  const cards = document.querySelectorAll<HTMLAnchorElement>(".letter-card");
  cards.forEach((c) => {
    applyState(c, today);
    attachClickGuard(c);
  });
}

export function getCardState(date: string): "locked" | "today" | "past" {
  const today = todayKey();
  if (date < today) return "past";
  if (date === today) return "today";
  return "locked";
}
