import { renderPillarsStage, initPillarsStage } from '../components/PillarsStage.js';

export function renderDevelopPage() {
  return renderPillarsStage('develop');
}

export function initDevelopPage(onChange) {
  return initPillarsStage('develop', onChange);
}
