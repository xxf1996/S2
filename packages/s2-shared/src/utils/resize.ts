import { debounce } from 'lodash';
import { RESIZE_RENDER_DELAY } from '../constant/resize';
import type { Adaptive, ResizeEffectParams } from '../interface';

export const analyzeAdaptive = (
  paramsContainer: HTMLElement,
  adaptive?: Adaptive,
) => {
  let container = paramsContainer;
  let adaptiveWidth = true;
  let adaptiveHeight = false;
  if (typeof adaptive !== 'boolean') {
    container = adaptive?.getContainer?.() || paramsContainer;
    adaptiveWidth = adaptive?.width ?? true;
    adaptiveHeight = adaptive?.height ?? true;
  }
  return { container, adaptiveWidth, adaptiveHeight };
};

export const createResizeObserver = (params: ResizeEffectParams) => {
  let isFirstRender = true;
  const { s2, adaptive, container, wrapper } = params;
  const {
    container: actualWrapper,
    adaptiveWidth,
    adaptiveHeight,
  } = analyzeAdaptive(wrapper, adaptive);

  if (!actualWrapper || !container || !adaptive || !s2) {
    return;
  }

  const render = (width?: number, height?: number) => {
    s2?.changeSheetSize(width, height);
    s2?.render(false);
  };

  const debounceRender = debounce(render, RESIZE_RENDER_DELAY);

  const onResize = () => {
    // 解决父容器有缩放, 获取宽高不对的问题: https://github.com/antvis/S2/pull/1425
    const { clientWidth: containerWidth, clientHeight: containerHeight } =
      container;

    const width = adaptiveWidth
      ? Math.floor(containerWidth ?? s2.options.width)
      : s2.options.width;
    const height = adaptiveHeight
      ? // 去除 header 和 page 后才是 sheet 真正的高度
        Math.floor(containerHeight ?? s2.options.height)
      : s2.options.height;

    if (!adaptiveWidth && !adaptiveHeight) {
      return;
    }

    if (isFirstRender) {
      render(width, height);
      isFirstRender = false;
      return;
    }
    debounceRender(width, height);
  };

  const resizeObserver = new ResizeObserver(
    ([entry]: ResizeObserverEntry[] = []) => {
      if (entry) {
        onResize();
      }
    },
  );

  resizeObserver.observe(actualWrapper, {
    box: 'border-box',
  });

  return () => {
    resizeObserver.unobserve(actualWrapper);
  };
};
