import type { PopperConfig } from '@nodesign/popper';

export interface TooltipConfig extends Omit<Omit<PopperConfig, 'content'>, 'arrow'> {
  content?: string | Node;
  arrow?: boolean | Node;
}
