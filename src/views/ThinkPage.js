import { renderPillarsStage, initPillarsStage } from '../components/PillarsStage.js';

export function renderThinkPage() {
  return renderPillarsStage('think');
}

export function initThinkPage(onChange) {
  return initPillarsStage('think', onChange);
}
