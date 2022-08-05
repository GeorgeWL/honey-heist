import {
  RefObject,
  CSSProperties,
  ReactNode,
  FormEventHandler,
  MouseEventHandler,
  Key,
  AriaRole,
  ClipboardEventHandler,
  CompositionEventHandler,
  FocusEventHandler,
  ReactEventHandler,
  KeyboardEventHandler,
  DragEventHandler,
  TouchEventHandler,
  PointerEventHandler,
  UIEventHandler,
  WheelEventHandler,
  AnimationEventHandler,
  TransitionEventHandler,
  HTMLAttributeAnchorTarget,
  HTMLAttributeReferrerPolicy,
} from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  &:before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #007878;
    transform: scaleX(0);
  }
  &:hover,
  &:focus {
    &:before {
      transform: scaleX(1);
    }
  }
`;

const Link = (
  props: JSX.IntrinsicAttributes & {
    ref?:
      | ((instance: HTMLAnchorElement | null) => void)
      | RefObject<HTMLAnchorElement>
      | null
      | undefined;
    slot?: string | undefined;
    style?: CSSProperties | undefined;
    title?: string | undefined;
    children?: ReactNode;
    onChange?: FormEventHandler<HTMLAnchorElement> | undefined;
    id?: string | undefined;
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    type?: string | undefined;
    key?: Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | 'true' | 'false') | 'inherit' | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | 'true' | 'false') | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | 'true' | 'false') | undefined;
    tabIndex?: number | undefined;
    translate?: 'yes' | 'no' | undefined;
    radioGroup?: string | undefined;
    role?: AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;
    inputMode?:
      | 'search'
      | 'text'
      | 'none'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | 'true' | 'false') | undefined;
    'aria-autocomplete'?: 'list' | 'none' | 'inline' | 'both' | undefined;
    'aria-busy'?: (boolean | 'true' | 'false') | undefined;
    'aria-checked'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?:
      | boolean
      | 'time'
      | 'true'
      | 'false'
      | 'step'
      | 'date'
      | 'page'
      | 'location'
      | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | 'true' | 'false') | undefined;
    'aria-dropeffect'?:
      | 'link'
      | 'none'
      | 'copy'
      | 'execute'
      | 'move'
      | 'popup'
      | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | 'true' | 'false') | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | 'true' | 'false') | undefined;
    'aria-haspopup'?:
      | boolean
      | 'dialog'
      | 'menu'
      | 'true'
      | 'false'
      | 'grid'
      | 'listbox'
      | 'tree'
      | undefined;
    'aria-hidden'?: (boolean | 'true' | 'false') | undefined;
    'aria-invalid'?:
      | boolean
      | 'true'
      | 'false'
      | 'grammar'
      | 'spelling'
      | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
    'aria-modal'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiline'?: (boolean | 'true' | 'false') | undefined;
    'aria-multiselectable'?: (boolean | 'true' | 'false') | undefined;
    'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | 'true' | 'false' | 'mixed' | undefined;
    'aria-readonly'?: (boolean | 'true' | 'false') | undefined;
    'aria-relevant'?:
      | 'text'
      | 'all'
      | 'additions'
      | 'additions removals'
      | 'additions text'
      | 'removals'
      | 'removals additions'
      | 'removals text'
      | 'text additions'
      | 'text removals'
      | undefined;
    'aria-required'?: (boolean | 'true' | 'false') | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | 'true' | 'false') | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: { __html: string } | undefined;
    onCopy?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCopyCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCut?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCutCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPaste?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onPasteCapture?: ClipboardEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEnd?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionEndCapture?:
      | CompositionEventHandler<HTMLAnchorElement>
      | undefined;
    onCompositionStart?: CompositionEventHandler<HTMLAnchorElement> | undefined;
    onCompositionStartCapture?:
      | CompositionEventHandler<HTMLAnchorElement>
      | undefined;
    onCompositionUpdate?:
      | CompositionEventHandler<HTMLAnchorElement>
      | undefined;
    onCompositionUpdateCapture?:
      | CompositionEventHandler<HTMLAnchorElement>
      | undefined;
    onFocus?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onFocusCapture?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlur?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlurCapture?: FocusEventHandler<HTMLAnchorElement> | undefined;
    onChangeCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInput?: FormEventHandler<HTMLAnchorElement> | undefined;
    onBeforeInputCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInput?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInputCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onReset?: FormEventHandler<HTMLAnchorElement> | undefined;
    onResetCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmit?: FormEventHandler<HTMLAnchorElement> | undefined;
    onSubmitCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalid?: FormEventHandler<HTMLAnchorElement> | undefined;
    onInvalidCapture?: FormEventHandler<HTMLAnchorElement> | undefined;
    onLoad?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onError?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onErrorCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyDownCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPress?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyPressCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUp?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onKeyUpCapture?: KeyboardEventHandler<HTMLAnchorElement> | undefined;
    onAbort?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onAbortCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlay?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThrough?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onCanPlayThroughCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onDurationChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptied?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEmptiedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncrypted?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEncryptedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEnded?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onEndedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedData?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedDataCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadata?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadedMetadataCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStart?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onLoadStartCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPause?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPauseCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlay?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlaying?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onPlayingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgress?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onProgressCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onRateChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeked?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekedCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeeking?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSeekingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalled?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onStalledCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspend?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSuspendCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdate?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTimeUpdateCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChange?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onVolumeChangeCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaiting?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onWaitingCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onAuxClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onAuxClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onContextMenuCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDoubleClickCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onDrag?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnd?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEndCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnter?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragEnterCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExit?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragExitCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeave?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragLeaveCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOver?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragOverCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStart?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDragStartCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDrop?: DragEventHandler<HTMLAnchorElement> | undefined;
    onDropCapture?: DragEventHandler<HTMLAnchorElement> | undefined;
    onMouseDown?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseDownCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseEnter?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMove?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseMoveCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOut?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOutCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOver?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseOverCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUp?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseUpCapture?: MouseEventHandler<HTMLAnchorElement> | undefined;
    onSelect?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onSelectCapture?: ReactEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancel?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchCancelCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEnd?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchEndCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMove?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchMoveCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStart?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onTouchStartCapture?: TouchEventHandler<HTMLAnchorElement> | undefined;
    onPointerDown?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerDownCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMove?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerMoveCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUp?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerUpCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancel?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerCancelCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerEnter?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerEnterCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerLeave?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerLeaveCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOver?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOverCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOut?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onPointerOutCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onGotPointerCaptureCapture?:
      | PointerEventHandler<HTMLAnchorElement>
      | undefined;
    onLostPointerCapture?: PointerEventHandler<HTMLAnchorElement> | undefined;
    onLostPointerCaptureCapture?:
      | PointerEventHandler<HTMLAnchorElement>
      | undefined;
    onScroll?: UIEventHandler<HTMLAnchorElement> | undefined;
    onScrollCapture?: UIEventHandler<HTMLAnchorElement> | undefined;
    onWheel?: WheelEventHandler<HTMLAnchorElement> | undefined;
    onWheelCapture?: WheelEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStart?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationStartCapture?:
      | AnimationEventHandler<HTMLAnchorElement>
      | undefined;
    onAnimationEnd?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationEndCapture?:
      | AnimationEventHandler<HTMLAnchorElement>
      | undefined;
    onAnimationIteration?: AnimationEventHandler<HTMLAnchorElement> | undefined;
    onAnimationIterationCapture?:
      | AnimationEventHandler<HTMLAnchorElement>
      | undefined;
    onTransitionEnd?: TransitionEventHandler<HTMLAnchorElement> | undefined;
    onTransitionEndCapture?:
      | TransitionEventHandler<HTMLAnchorElement>
      | undefined;
    download?: any;
    href?: string | undefined;
    hrefLang?: string | undefined;
    media?: string | undefined;
    ping?: string | undefined;
    rel?: string | undefined;
    target?: HTMLAttributeAnchorTarget | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  } & { theme?: any } & { as?: undefined; forwardedAs?: undefined }
) => <Anchor target="_blank" rel="noreferrer" {...props} />;
export default Link;
