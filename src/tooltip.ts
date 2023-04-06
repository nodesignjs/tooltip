import Popper, { EmitType, PopperConfig } from '@cosmo-design/popper';
import { $, addClass } from 'wblib';
import { TooltipConfig } from './type';
import './index.scss';

const CLS_PREFIX = 'cdt';
const CLS_ARROW = `${CLS_PREFIX}_arrow`;
const CLS_CONTENT = `${CLS_PREFIX}_content`;
const CLS_ANI = `${CLS_PREFIX}_ani`;

function getConfig(c: TooltipConfig): PopperConfig {
  let { content, arrow } = c;
  const disabled = content == null || content === '';
  if (!(content instanceof Element)) {
    content = $('div', undefined, String(content));
  }
  if (arrow !== false && !(arrow instanceof Element)) {
    arrow = $();
  }
  addClass(content as Element, CLS_CONTENT);
  if (arrow) addClass(arrow as Element, CLS_ARROW);
  return {
    emit: EmitType.HOVER,
    autoScroll: false,
    closeOnScroll: true,
    autoUpdate: false,
    enterable: true,
    cssName: CLS_ANI,
    disabled,
    openDelay: 100,
    ...c,
    content,
    arrow,
  } as PopperConfig;
}

export class Tooltip extends Popper {
  constructor(config: TooltipConfig) {
    super(getConfig(config));
    addClass(this.el, CLS_PREFIX);
  }

  // @ts-ignore:next-line
  updateConfig(config: Partial<TooltipConfig>) {
    const { content, arrow } = config;

    if ('content' in config && content !== this.config.content) {
      if (content instanceof Element) {
        addClass(content, CLS_CONTENT);
      } else {
        config.content = this.config.content;
        config.disabled = config.disabled || content == null || content === '';
        if (config.disabled) this.disable();
        config.content.textContent = String(content);
      }
    }

    if ('arrow' in config && arrow !== this.config.arrow) {
      if (arrow === true) {
        config.arrow = this.config.arrow || $(`.${CLS_ARROW}`);
      } else if (arrow instanceof Element) {
        addClass(arrow, CLS_ARROW);
      }
    }

    super.updateConfig(config as PopperConfig);
  }
}
