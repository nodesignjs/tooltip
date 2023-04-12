import {
  Tooltip, PLACEMENT, EmitType,
} from '../src';

window.onload = function () {
  const container = document.querySelector('.container')! as HTMLElement;
  const c = document.querySelector('.c')! as HTMLElement;
  const btn = document.querySelector('#btn')! as HTMLElement;

  const cbb = container.getBoundingClientRect();

  c.scrollTop = (2000 - cbb.height) / 2 + 10;
  c.scrollLeft = (2000 - cbb.width) / 2 + 10;

  requestAnimationFrame(() => {
    const config = {
      container,
      content: 'npm i -S @nodesign/tooltip',
      trigger: btn,
      autoPlacement: true,
      autoUpdate: false,
      autoScroll: false,
      closeOnScroll: true,
      enterable: true,
      translate: [0, -10],
      arrow: true,
      placement: PLACEMENT.T,
      openDelay: 100,
      closeDelay: 50,
      emit: EmitType.HOVER,
      open: true,
      cssName: 'ndt_ani',
    };
    const popup = new Tooltip(config as any);

    const update = () => {
      popup.updateConfig(config);
    };

    const selection = document.querySelector('.section') as HTMLElement;
    selection.onchange = ({ target }) => {
      const { name, value, checked } = target as any;
      if (name === 'cb') {
        if (value === 'arrow') {
          config.arrow = checked;
        } else if (value === 'css') {
          config.cssName = checked ? 'ndt_ani' : '';
        } else {
          config[value] = checked;
        }
        update();
      } else if (name === 'placement') {
        config.placement = value;
        update();
      } else if (name === 'emit') {
        config.emit = value || undefined;
        update();
      }
    };

    const transXs = document.querySelector('.translate-x-s') as HTMLElement;
    const transYs = document.querySelector('.translate-y-s') as HTMLElement;
    const openD = document.querySelector('.open-delay') as HTMLElement;
    const closeD = document.querySelector('.close-delay') as HTMLElement;

    selection.oninput = ({ target }) => {
      const { name, value } = target as any;
      if (name === 'translateX') {
        transXs.textContent = `${value}px`;
        config.translate = [Number(value), config.translate[1]];
        update();
      } else if (name === 'translateY') {
        transYs.textContent = `${value}px`;
        config.translate = [config.translate[0], Number(value)];
        update();
      } else if (name === 'openDelay') {
        openD.textContent = `${value}ms`;
        config.openDelay = Number(value);
        update();
      } else if (name === 'closeDelay') {
        closeD.textContent = `${value}ms`;
        config.closeDelay = Number(value);
        update();
      }
    };
  });
};
