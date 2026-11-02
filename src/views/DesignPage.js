import { renderPillarsStage, initPillarsStage } from '../components/PillarsStage.js';

export function renderDesignPage() {
  return renderPillarsStage('design');
}

export function initDesignPage(onChange) {
  return initPillarsStage('design', onChange);
}
