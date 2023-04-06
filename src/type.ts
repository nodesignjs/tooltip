import type { PopperConfig } from '@cosmo-design/popper';

export interface TooltipConfig extends Omit<Omit<PopperConfig, 'content'>, 'arrow'> {
  content?: string | Node;
  arrow?: boolean | Node;
}
