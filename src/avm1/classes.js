﻿/* -*- mode: javascript; tab-width: 4; insert-tabs-mode: nil; indent-tabs-mode: nil -*- */

function proxyNativeProperty(propertyName) {
  return {
    get: function getter() { return this.$nativeObject[propertyName]; },
    set: function setter(value) { this.$nativeObject[propertyName] = value; },
    enumerable: true
  };
}

function proxyNativeReadonlyProperty(propertyName) {
  return {
    get: function getter() { return this.$nativeObject[propertyName]; },
    enumerable: true
  };
}

function proxyNativeMethod(methodName) {
  return {
    value: function attachAudio(id) {
      return this.$nativeObject[methodName].apply(this, arguments);
    },
    enumerable: false
  };
}

function createConstant(value) {
  return {
    value: value,
    writable: false,
    configurable: false,
    enumerable: true
  };
}

function defineObjectProperties(obj, propeties) {
  for (var i in propeties)
    Object.defineProperty(obj, i, propeties[i]);
}

// AS2 Classes

function AS2MovieClip() {
}
AS2MovieClip.prototype = Object.create({}, {
  $nativeObject: {
    value: null,
    writable: true
  },
  $attachNativeObject: {
    value: function attachNativeObject(nativeMovieClip) {
      this.$nativeObject = nativeMovieClip;
      nativeMovieClip.$as2Object = this;
    },
    enumerable: false
  },
  $lookupChild: {
    value: function lookupChild(id) {
      return this.$nativeObject.$lookupChild(id);
    },
    enumerable: false
  },
  _alpha: { // @flash.display.DisplayObject
    get: function get$_alpha() { return this.$nativeObject.alpha; },
    set: function set$_alpha(value) { this.$nativeObject.alpha = value; },
    enumerable: true
  },
  attachAudio: {
    value: function attachAudio(id) {
      throw 'Not implemented: attachAudio';
    },
    enumerable: false
  },
  attachBitmap: {
    value: function attachBitmap(bmp, depth, pixelSnapping, smoothing) {
      throw 'Not implemented: attachBitmap';
    },
    enumerable: false
  },
  attachMovie: {
    value: function attachMovie(id, name, depth, initObject) {
      throw 'Not implemented: attachMovie';
    },
    enumerable: false
  },
  beginBitmapFill: {
    value: function beginBitmapFill(bmp, matrix, repeat, smoothing) {
      throw 'Not implemented: beginBitmapFill';
    },
    enumerable: false
  },
  beginGradientFill: {
    value: function beginGradientFill(fillType, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
      throw 'Not implemented: beginGradientFill';
    },
    enumerable: false
  },
  blendMode: { // @flash.display.DisplayObject
    get: function get$blendMode() { return this.$nativeObject.blendMode; },
    set: function set$blendMode(value) { this.$nativeObject.blendMode = value; },
    enumerable: true
  },
  cacheAsBitmap: { // @flash.display.DisplayObject
    get: function get$cacheAsBitmap() { return this.$nativeObject.cacheAsBitmap; },
    set: function set$cacheAsBitmap(value) { this.$nativeObject.cacheAsBitmap = value; },
    enumerable: true
  },
  clear: {
    value: function clear() {
      throw 'Not implemented: clear';
    },
    enumerable: false
  },
  createEmptyMovieClip: {
    value: function createEmptyMovieClip(name, depth) {
      throw 'Not implemented: createEmptyMovieClip';
    },
    enumerable: false
  },
  createTextField: {
    value: function createTextField(instanceName, depth, x, y, width, height) {
      throw 'Not implemented: createTextField';
    },
    enumerable: false
  },
  _currentframe: { // @flash.display.MovieClip
    get: function get$_currentframe() { return this.$nativeObject.currentFrame; },
    enumerable: true
  },
  curveTo: {
    value: function curveTo(controlX, controlY, anchorX, anchorY) {
      throw 'Not implemented: curveTo';
    },
    enumerable: false
  },
  _droptarget: { // @flash.display.Sprite
    get: function get$_droptarget() { return this.$nativeObject.dropTarget; },
    enumerable: true
  },
  duplicateMovieClip: {
    value: function duplicateMovieClip(name, depth, initObject) {
      var newNativeObj = this.$nativeObject.duplicateMovieClip(name, depth, initObject);
      var newMovieClip = new AS2MovieClip();
      newMovieClip.$attachNativeObject(newNativeObj);
      return newMovieClip;
    },
    enumerable: false
  },
  enabled: { // @flash.display.MovieClip
    get: function get$enabled() { return this.$nativeObject.enabled; },
    set: function set$enabled(value) { this.$nativeObject.enabled = value; },
    enumerable: true
  },
  endFill: {
    value: function endFill() {
      throw 'Not implemented: endFill';
    },
    enumerable: false
  },
  filters: { // @flash.display.DisplayObject
    get: function get$filters() { throw 'Not implemented: get$filters'; },
    set: function set$filters(value) { throw 'Not implemented: set$filters'; },
    enumerable: true
  },
  focusEnabled: {
    get: function get$focusEnabled() { throw 'Not implemented: get$focusEnabled'; },
    set: function set$focusEnabled(value) { throw 'Not implemented: set$focusEnabled'; },
    enumerable: true
  },
  _focusrect: {
    get: function get$_focusrect() { throw 'Not implemented: get$_focusrect'; },
    set: function set$_focusrect(value) { throw 'Not implemented: set$_focusrect'; },
    enumerable: true
  },
  forceSmoothing: {
    get: function get$forceSmoothing() { throw 'Not implemented: get$forceSmoothing'; },
    set: function set$forceSmoothing(value) { throw 'Not implemented: set$forceSmoothing'; },
    enumerable: true
  },
  _framesloaded: { // @flash.display.MovieClip
    get: function get$_framesloaded() { return this.$nativeObject._framesloaded; },
    enumerable: true
  },
  getBounds: {
    value: function getBounds(bounds) {
      throw 'Not implemented: getBounds';
    },
    enumerable: false
  },
  getBytesLoaded: {
    value: function getBytesLoaded() {
      throw 'Not implemented: getBytesLoaded';
    },
    enumerable: false
  },
  getBytesTotal: {
    value: function getBytesTotal() {
      throw 'Not implemented: getBytesTotal';
    },
    enumerable: false
  },
  getDepth: {
    value: function getDepth() {
      throw 'Not implemented: getDepth';
    },
    enumerable: false
  },
  getInstanceAtDepth: {
    value: function getInstanceAtDepth(depth) {
      throw 'Not implemented: getInstanceAtDepth';
    },
    enumerable: false
  },
  getNextHighestDepth: {
    value: function getNextHighestDepth() {
      throw 'Not implemented: getNextHighestDepth';
    },
    enumerable: false
  },
  getRect: {
    value: function getRect(bounds) {
      throw 'Not implemented: getRect';
    },
    enumerable: false
  },
  getSWFVersion: {
    value: function getSWFVersion() {
      throw 'Not implemented: getSWFVersion';
    },
    enumerable: false
  },
  getTextSnapshot: {
    value: function getTextSnapshot() {
      throw 'Not implemented: getTextSnapshot';
    },
    enumerable: false
  },
  getURL: {
    value: function getURL(url, window, method) {
      var request = new AS2URLRequest(url);
      if (method)
        request.method = method;
      flash.net.navigateToURL(request, window);
    },
    enumerable: false
  },
  globalToLocal: {
    value: function globalToLocal(pt) {
      throw 'Not implemented: globalToLocal';
    },
    enumerable: false
  },
  gotoAndPlay: {
    value: function gotoAndPlay(frame) {
      this.$nativeObject.gotoAndPlay(frame);
    },
    enumerable: false
  },
  gotoAndStop: {
    value: function gotoAndStop(frame) {
      this.$nativeObject.gotoAndStop(frame);
    },
    enumerable: false
  },
  _height: { // @flash.display.DisplayObject
    get: function get$_height() { return this.$nativeObject.height; },
    set: function set$_height(value) { this.$nativeObject.height = value; },
    enumerable: true
  },
  _highquality: {
    get: function get$_highquality() { throw 'Not implemented: get$_highquality'; },
    set: function set$_highquality(value) { throw 'Not implemented: set$_highquality'; },
    enumerable: true
  },
  hitArea: {
    get: function get$hitArea() { throw 'Not implemented: get$hitArea'; },
    set: function set$hitArea(value) { throw 'Not implemented: set$hitArea'; },
    enumerable: true
  },
  hitTest: {
    value: function hitTest() {
      throw 'Not implemented: hitTest';
    },
    enumerable: false
  },
  lineGradientStyle: {
    value: function lineGradientStyle(fillType, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
      throw 'Not implemented: lineGradientStyle';
    },
    enumerable: false
  },
  lineStyle: {
    value: function lineStyle(thickness, rgb, alpha, pixelHinting, noScale, capsStyle, jointStyle, miterLimit) {
      throw 'Not implemented: lineStyle';
    },
    enumerable: false
  },
  lineTo: {
    value: function lineTo(x, y) {
      throw 'Not implemented: lineTo';
    },
    enumerable: false
  },
  loadMovie: {
    value: function loadMovie(url, method) {
      throw 'Not implemented: loadMovie';
    },
    enumerable: false
  },
  loadVariables: {
    value: function loadVariables(url, method) {
      throw 'Not implemented: loadVariables';
    },
    enumerable: false
  },
  localToGlobal: {
    value: function localToGlobal(pt) {
      throw 'Not implemented: localToGlobal';
    },
    enumerable: false
  },
  _lockroot: {
    get: function get$_lockroot() { throw 'Not implemented: get$_lockroot'; },
    set: function set$_lockroot(value) { throw 'Not implemented: set$_lockroot'; },
    enumerable: true
  },
  menu: {
    get: function get$menu() { throw 'Not implemented: get$menu'; },
    set: function set$menu(value) { throw 'Not implemented: set$menu'; },
    enumerable: true
  },
  moveTo: {
    value: function moveTo(x, y) {
      throw 'Not implemented: moveTo';
    },
    enumerable: false
  },
  _name: { // @flash.display.DisplayObject
    get: function get$_name() { return this.$nativeObject.name; },
    set: function set$_name(value) { this.$nativeObject.name = value; },
    enumerable: true
  },
  nextFrame: {
    value: function nextFrame() {
      this.$nativeObject.nextFrame();
    },
    enumerable: false
  },
  onData: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onDragOut: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onDragOver: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onEnterFrame: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKeyDown: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKeyUp: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKillFocus: {
    value: function(newFocus) {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onLoad: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onMouseDown: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onMouseUp: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onPress: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRelease: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onReleaseOutside: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRollOut: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRollOver: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onSetFocus: {
    value: function(oldFocus) {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onUnload: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  opaqueBackground: { // @flash.display.DisplayObject
    get: function get$opaqueBackground() { return this.$nativeObject.opaqueBackground; },
    set: function set$opaqueBackground(value) { this.$nativeObject.opaqueBackground = value; },
    enumerable: true
  },
  _parent: { // @flash.display.DisplayObject
    get: function get$_parent() { return this.$nativeObject.parent; },
    set: function set$_parent(value) { this.$nativeObject.parent = value; },
    enumerable: true
  },
  play: {
    value: function play() {
      this.$nativeObject.play();
    },
    enumerable: false
  },
  prevFrame: {
    value: function prevFrame() {
      this.$nativeObject.prevFrame();
    },
    enumerable: false
  },
  _quality: { // @flash.display.Stage
    get: function get$_quality() { throw 'Not implemented: get$_quality'; },
    set: function set$_quality(value) { throw 'Not implemented: set$_quality'; },
    enumerable: true
  },
  removeMovieClip: {
    value: function removeMovieClip() {
      var parent = this._parent.$nativeObject;
      parent.removeChild(this.$nativeObject);
    },
    enumerable: false
  },
  _rotation: { // @flash.display.DisplayObject
    get: function get$_rotation() { return this.$nativeObject.rotation; },
    set: function set$_rotation(value) { this.$nativeObject.rotation = value; },
    enumerable: true
  },
  scale9Grid: { // @flash.display.DisplayObject
    get: function get$scale9Grid() { throw 'Not implemented: get$scale9Grid'; },
    set: function set$scale9Grid(value) { throw 'Not implemented: set$scale9Grid'; },
    enumerable: true
  },
  scrollRect: {
    get: function get$scrollRect() { throw 'Not implemented: get$scrollRect'; },
    set: function set$scrollRect(value) { throw 'Not implemented: set$scrollRect'; },
    enumerable: true
  },
  setMask: {
    value: function setMask(mc) {
      throw 'Not implemented: setMask';
    },
    enumerable: false
  },
  _soundbuftime: {
    get: function get$_soundbuftime() { throw 'Not implemented: get$_soundbuftime'; },
    set: function set$_soundbuftime(value) { throw 'Not implemented: set$_soundbuftime'; },
    enumerable: true
  },
  startDrag: {
    value: function startDrag(lock, left, top, right, bottom) {
      this.$nativeObject.startDrag(lock, arguments.length < 3 ? null :
        new AS2Rectangle(left, top, right - left, bottom - top));
    },
    enumerable: false
  },
  stop: {
    value: function stop() {
      this.$nativeObject.stop();
    },
    enumerable: false
  },
  stopDrag: {
    value: function stopDrag() {
      this.$nativeObject.stopDrag();
    },
    enumerable: false
  },
  swapDepths: {
    value: function swapDepths(target) {
      throw 'Not implemented: swapDepths';
    },
    enumerable: false
  },
  tabChildren: { // @flash.display.DisplayObjectContainer
    get: function get$tabChildren() { return this.$nativeObject.tabChildren; },
    set: function set$tabChildren(value) { this.$nativeObject.tabChildren = value; },
    enumerable: true
  },
  tabEnabled: { // @flash.display.InteractiveObject
    get: function get$tabEnabled() { return this.$nativeObject.tabEnabled; },
    set: function set$tabEnabled(value) { this.$nativeObject.tabEnabled = value; },
    enumerable: true
  },
  tabIndex: { // @flash.display.InteractiveObject
    get: function get$tabIndex() { return this.$nativeObject.tabIndex; },
    set: function set$tabIndex(value) { return this.$nativeObject.tabIndex = value; },
    enumerable: true
  },
  _target: { // this.$nativeObject.getPath() ?
    get: function get$_target() { throw 'Not implemented: get$_target'; },
    enumerable: true
  },
  _totalframes: { // @flash.display.MovieClip
    get: function get$_totalframes() { return this.$nativeObject.totalframes; },
    enumerable: true
  },
  trackAsMenu: {
    get: function get$trackAsMenu() { throw 'Not implemented: get$trackAsMenu'; },
    set: function set$trackAsMenu(value) { throw 'Not implemented: set$trackAsMenu'; },
    enumerable: true
  },
  transform: {
    get: function get$transform() { throw 'Not implemented: get$transform'; },
    set: function set$transform(value) { throw 'Not implemented: set$transform'; },
    enumerable: true
  },
  unloadMovie: {
    value: function unloadMovie() {
      throw 'Not implemented: unloadMovie';
    },
    enumerable: false
  },
  _url: {
    get: function get$_url() { throw 'Not implemented: get$_url'; },
    enumerable: true
  },
  useHandCursor: {
    get: function get$useHandCursor() { throw 'Not implemented: get$useHandCursor'; },
    set: function set$useHandCursor(value) { throw 'Not implemented: set$useHandCursor'; },
    enumerable: true
  },
  _visible: { // @flash.display.DisplayObject
    get: function get$_visible() { return this.$nativeObject.visible; },
    set: function set$_visible(value) { this.$nativeObject.visible = value; },
    enumerable: true
  },
  _width: { // @flash.display.DisplayObject
    get: function get$_width() { return this.$nativeObject.width; },
    set: function set$_width(value) { this.$nativeObject.width = value; },
    enumerable: true
  },
  _x: {
    get: function get$_x() { return this.$nativeObject.x; },
    set: function set$_x(value) { this.$nativeObject.x = value; },
    enumerable: true
  },
  _xmouse: { // @flash.display.DisplayObject
    get: function get$_xmouse() { return this.$nativeObject.mouseX; },
    enumerable: true
  },
  _xscale: { // @flash.display.DisplayObject
    get: function get$_xscale() { return this.$nativeObject.scaleX; },
    set: function set$_xscale(value) { this.$nativeObject.scaleX = value; },
    enumerable: true
  },
  _y: { // @flash.display.DisplayObject
    get: function get$_y() { return this.$nativeObject.y; },
    set: function set$_y(value) { this.$nativeObject.y = value; },
    enumerable: true
  },
  _ymouse: { // @flash.display.DisplayObject
    get: function get$_ymouse() { return this.$nativeObject.mouseY; },
    enumerable: true
  },
  _yscale: { // @flash.display.DisplayObject
    get: function get$_yscale() { return this.$nativeObject.scaleY; },
    set: function set$_yscale(value) { this.$nativeObject.scale = value; },
    enumerable: true
  }
});

function AS2Button() {
}
AS2Button.prototype = Object.create({}, {
  $nativeObject: {
    value: null,
    writable: true
  },
  $attachNativeObject: {
    value: function attachNativeObject(nativeButton) {
      this.$nativeObject = nativeButton;
      nativeButton.$as2Object = this;
    },
    enumerable: false
  },
  _alpha: { // @flash.display.DisplayObject
    get: function get$_alpha() { return this.$nativeObject.alpha; },
    set: function set$_alpha(value) { this.$nativeObject.alpha = value; },
    enumerable: true
  },
  blendMode: { // @flash.display.DisplayObject
    get: function get$blendMode() { return this.$nativeObject.blendMode; },
    set: function set$blendMode(value) { this.$nativeObject.blendMode = value; },
    enumerable: true
  },
  cacheAsBitmap: { // @flash.display.DisplayObject
    get: function get$cacheAsBitmap() { return this.$nativeObject.cacheAsBitmap; },
    set: function set$cacheAsBitmap(value) { this.$nativeObject.cacheAsBitmap = value; },
    enumerable: true
  },
  enabled: { // @flash.display.SimpleButton
    get: function get$enabled() { return this.$nativeObject.enabled; },
    set: function set$enabled(value) { this.$nativeObject.enabled = value; },
    enumerable: true
  },
  filters: {
    get: function get$filters() { throw 'Not implemented: get$filters'; },
    set: function set$filters(value) { throw 'Not implemented: set$filters'; },
    enumerable: true
  },
  _focusrect: {
    get: function get$_focusrect() { throw 'Not implemented: get$_focusrect'; },
    set: function set$_focusrect(value) { throw 'Not implemented: set$_focusrect'; },
    enumerable: true
  },
  getDepth: {
    value: function getDepth() {
      throw 'Not implemented: getDepth';
    },
    enumerable: false
  },
  _height: { // @flash.display.DisplayObject
    get: function get$_height() { return this.$nativeObject.height; },
    set: function set$_height(value) { this.$nativeObject.height = value; },
    enumerable: true
  },
  _highquality: {
    get: function get$_highquality() { throw 'Not implemented: get$_highquality'; },
    set: function set$_highquality(value) { throw 'Not implemented: set$_highquality'; },
    enumerable: true
  },
  menu: {
    get: function get$menu() { throw 'Not implemented: get$menu'; },
    set: function set$menu(value) { throw 'Not implemented: set$menu'; },
    enumerable: true
  },
  _name: { // @flash.display.DisplayObject
    get: function get$_name() { return this.$nativeObject.name; },
    set: function set$_name(value) { this.$nativeObject.name = value; },
    enumerable: true
  },
  onDragOut: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onDragOver: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKeyDown: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKeyUp: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKillFocus: {
    value: function(newFocus) {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onPress: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRelease: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onReleaseOutside: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRollOut: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onRollOver: {
    value: function() {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onSetFocus: {
    value: function(oldFocus) {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  _parent: { // @flash.display.DisplayObject
    get: function get$_parent() { return this.$nativeObject.parent; },
    set: function set$_parent(value) { this.$nativeObject.parent = value; },
    enumerable: true
  },
  _quality: {
    get: function get$_quality() { throw 'Not implemented: get$_quality'; },
    set: function set$_quality(value) { throw 'Not implemented: set$_quality'; },
    enumerable: true
  },
  _rotation: { // @flash.display.DisplayObject
    get: function get$_rotation() { return this.$nativeObject.rotation; },
    set: function set$_rotation(value) { this.$nativeObject.rotation = value; },
    enumerable: true
  },
  scale9Grid: { // @flash.display.DisplayObject
    get: function get$scale9Grid() { throw 'Not implemented: get$scale9Grid'; },
    set: function set$scale9Grid(value) { throw 'Not implemented: set$scale9Grid'; },
    enumerable: true
  },
  _soundbuftime: {
    get: function get$_soundbuftime() { throw 'Not implemented: get$_soundbuftime'; },
    set: function set$_soundbuftime(value) { throw 'Not implemented: set$_soundbuftime'; },
    enumerable: true
  },
  tabEnabled: { // @flash.display.InteractiveObject
    get: function get$tabEnabled() { return this.$nativeObject.tabEnabled; },
    set: function set$tabEnabled(value) { this.$nativeObject.tabEnabled = value; },
    enumerable: true
  },
  tabIndex: { // @flash.display.InteractiveObject
    get: function get$tabIndex() { return this.$nativeObject.tabIndex; },
    set: function set$tabIndex(value) { return this.$nativeObject.tabIndex = value; },
    enumerable: true
  },
  _target: {
    get: function get$_target() { throw 'Not implemented: get$_target'; },
    enumerable: true
  },
  trackAsMenu: {
    get: function get$trackAsMenu() { throw 'Not implemented: get$trackAsMenu'; },
    set: function set$trackAsMenu(value) { throw 'Not implemented: set$trackAsMenu'; },
    enumerable: true
  },
  _url: {
    get: function get$_url() { throw 'Not implemented: get$_url'; },
    enumerable: true
  },
  useHandCursor: {
    get: function get$useHandCursor() { throw 'Not implemented: get$useHandCursor'; },
    set: function set$useHandCursor(value) { throw 'Not implemented: set$useHandCursor'; },
    enumerable: true
  },
  _visible: { // @flash.display.DisplayObject
    get: function get$_visible() { return this.$nativeObject.visible; },
    set: function set$_visible(value) { this.$nativeObject.visible = value; },
    enumerable: true
  },
  _width: { // @flash.display.DisplayObject
    get: function get$_width() { return this.$nativeObject.width; },
    set: function set$_width(value) { this.$nativeObject.width = value; },
    enumerable: true
  },
  _x: {
    get: function get$_x() { return this.$nativeObject.x; },
    set: function set$_x(value) { this.$nativeObject.x = value; },
    enumerable: true
  },
  _xmouse: { // @flash.display.DisplayObject
    get: function get$_xmouse() { return this.$nativeObject.mouseX; },
    enumerable: true
  },
  _xscale: { // @flash.display.DisplayObject
    get: function get$_xscale() { return this.$nativeObject.scaleX; },
    set: function set$_xscale(value) { this.$nativeObject.scaleX = value; },
    enumerable: true
  },
  _y: { // @flash.display.DisplayObject
    get: function get$_y() { return this.$nativeObject.y; },
    set: function set$_y(value) { this.$nativeObject.y = value; },
    enumerable: true
  },
  _ymouse: { // @flash.display.DisplayObject
    get: function get$_ymouse() { return this.$nativeObject.mouseY; },
    enumerable: true
  },
  _yscale: { // @flash.display.DisplayObject
    get: function get$_yscale() { return this.$nativeObject.scaleY; },
    set: function set$_yscale(value) { this.$nativeObject.scale = value; },
    enumerable: true
  }
});

// TODO TextField
// TODO MovieClipLoader

function AS2Key() {}
defineObjectProperties(AS2Key, {
  DOWN: createConstant(40),
  LEFT: createConstant(37),
  RIGHT: createConstant(39),
  UP: createConstant(38),
  $listeners: {
    value: [],
    writable: false,
    enumerable: false
  },
  $keyStates: {
    value: [],
    writable: false,
    enumerable: false
  },
  $lastKeyCode: {
    value: 0,
    writable: true,
    configurable: true,
    enumerable: false
  },
  $bind: {
    value: function $bind(canvas) {
      canvas.ownerDocument.addEventListener('keydown', function(e) {
        AS2Key.$lastKeyCode = e.keyCode;
        AS2Key.$keyStates[e.keyCode] = 1;
        AS2Key.$dispatchEvent('onKeyDown');
      }, false);
      canvas.ownerDocument.addEventListener('keyup', function(e) {
        AS2Key.$lastKeyCode = e.keyCode;
        delete AS2Key.$keyStates[e.keyCode];
        AS2Key.$dispatchEvent('onKeyUp');
      }, false);
    },
    enumerable: false
  },
  $dispatchEvent: {
    value: function dispatchEvent(eventName, args) {
      for (var i = 0; i < AS2Key.$listeners.length; i++)
        AS2Key.$listeners[i][eventName].apply(null, args);
    },
    enumerable: false
  },
  addListener: {
    value: function addListener(listener) {
      AS2Key.$listeners.push(listener);
    },
    enumerable: false
  },
  isDown: {
    value: function isDown(code) {
      return !!AS2Key.$keyStates[code];
    }
  },
  removeListener: {
    value: function removeListener(listener) {
      var i = AS2Key.$listeners.indexOf(listener);
      if (i < 0)
        return;
      AS2Key.$listeners.splice(i, 1);
    },
    enumerable: false
  }
});
AS2Key.prototype = Object.create({}, {
  onKeyDown: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onKeyUp: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  }
});

function AS2Mouse() {}
defineObjectProperties(AS2Mouse, {
  $listeners: {
    value: [],
    writable: false,
    enumerable: false
  },
  $bind: {
    value: function $bind(canvas) {
      // TODO bind to canvas
    },
    enumerable: false
  },
  $dispatchEvent: {
    value: function dispatchEvent(eventName, args) {
      for (var i = 0; i < AS2Mouse.$listeners.length; i++)
        AS2Mouse.$listeners[i][eventName].apply(null, args);
    },
    enumerable: false
  },
  addListener: {
    value: function addListener(listener) {
      AS2Mouse.$listeners.push(listener);
    },
    enumerable: false
  },
  hide: {
    value: function hide() {
      // flash.ui.Mouse.hide()
      throw 'Not implemented: hide';
    },
    enumerable: false
  },
  removeListener: {
    value: function removeListener(listener) {
      var i = AS2Mouse.$listeners.indexOf(listener);
      if (i < 0)
        return;
      AS2Mouse.$listeners.splice(i, 1);
    },
    enumerable: false
  },
  show: {
    value: function show() {
      // flash.ui.Mouse.show()
      throw 'Not implemented: show';
    },
    enumerable: false
  }
});
AS2Mouse.prototype = Object.create({}, {
  onMouseDown: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onMouseMove: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onMouseUp: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onMouseWheel: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  }
});

function AS2Stage() {
}
defineObjectProperties(AS2Stage, {
  $listeners: {
    value: [],
    writable: false,
    enumerable: false
  },
  $dispatchEvent: {
    value: function dispatchEvent(eventName, args) {
      for (var i = 0; i < AS2Stage.$listeners.length; i++)
        AS2Stage.$listeners[i][eventName].apply(null, args);
    },
    enumerable: false
  },
  addListener: {
    value: function addListener(listener) {
      AS2Stage.$listeners.push(listener);
    },
    enumerable: false
  },
  align: {
    get: function get$align() {
      throw 'Not implemented: get$align';
    },
    set: function set$align(value) {
      throw 'Not implemented: set$align';
    },
    enumerable: true
  },
  displayState: {
    get: function get$displayState() {
      throw 'Not implemented: get$displayState';
    },
    set: function set$displayState(value) {
      throw 'Not implemented: set$displayState';
    },
    enumerable: true
  },
  fullScreenSourceRect: {
    get: function get$fullScreenSourceRect() {
      throw 'Not implemented: get$fullScreenSourceRect';
    },
    set: function set$fullScreenSourceRect(value) {
      throw 'Not implemented: set$fullScreenSourceRect';
    },
    enumerable: true
  },
  height: {
    get: function get$height() {
      return AS2Context.instance.stage.height;
    },
    enumerable: true
  },
  removeListener: {
    value: function removeListener(listener) {
      var i = AS2Stage.$listeners.indexOf(listener);
      if (i < 0)
        return;
      AS2Stage.$listeners.splice(i, 1);
    },
    enumerable: false
  },
  scaleMode: {
    get: function get$scaleMode() {
      throw 'Not implemented: get$scaleMode';
    },
    set: function set$scaleMode(value) {
      throw 'Not implemented: set$scaleMode';
    },
    enumerable: true
  },
  showMenu: {
    get: function get$showMenu() {
      throw 'Not implemented: get$showMenu';
    },
    set: function set$showMenu(value) {
      throw 'Not implemented: set$showMenu';
    },
    enumerable: true
  },
  width: {
    get: function get$width() {
      return AS2Context.instance.stage.width;
    },
    enumerable: true
  }
});
AS2Stage.prototype = Object.create({}, {
  onFullScreen: {
    value: function (bFull) {},
    writable: true,
    configurable: true,
    enumerable: false
  },
  onResize: {
    value: function () {},
    writable: true,
    configurable: true,
    enumerable: false
  }
});

var flash = {};

flash.geom = {};

function AS2Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
AS2Rectangle.prototype = Object.create({}, {
  // TODO methods
});
flash.geom.Rectangle = AS2Rectangle;

// TODO flash.geom.Point
// TODO flash.geom.Matrix
// TODO flash.geom.ColorTransform
// TODO flash.geom.Transform

flash.net = {
  navigateToURL: function navigateToURL(request, window) {
    if (request.method == 'GET') {
      // HACK trying to perform simple case of the navigateToURL
      window.open(request.url, window);
      return;
    }
    throw 'Not implemented: navigateToURL';
  }
};

function AS2URLRequest(url) {
  this.url = url;
}
AS2URLRequest.prototype = Object.create({}, {
  url: {
    value: null,
    writable: true,
    configurable: true,
    enumerable: true
  },
  method: {
    value: 'GET',
    writable: true,
    configurable: true,
    enumerable: true
  }
});
flash.net.URLRequest = AS2URLRequest;

flash.system = {
  fscommand: function fscommand(command, parameters) {
    // TODO ignoring all fscommand
    console.log('FSCommand: ' + command + '; ' + parameters);
  }
};

function AS2Capabilities() {}
defineObjectProperties(AS2Capabilities, {
  version: {
    get: function get$version() {
      return 'SHUMWAY ' + AS2Context.instance.swfVersion + ',0,0,0';
    },
    enumerable: true
  }
});
flash.system.Capalilities = AS2Capabilities;

flash.utils = {
  clearInterval: window.clearInterval,
  clearTimeout: window.clearTimeout,
  getTimer: (function() {
    var startTime = Date.now();
    return (function() {
      return Date.now() - startTime;
    });
  })(),
  setInterval: window.setInterval,
  setTimeout: window.setTimeout
};

// Built-in classes modifications

defineObjectProperties(Object.prototype, {
  watch: {
    get: function watch() { throw 'Not implemented: watch'; },
    enumerable: false
  },
  unwatch: {
    get: function unwatch() { throw 'Not implemented: unwatch' },
    enumerable: false
  },
  addProperty: {
    value: function addProperty() { throw 'Not implemented: addProperty'; },
    enumerable: false
  },
  registerClass: {
    value: function registerClass() { throw 'Not implemented: registerClass'; },
    enumerable: false
  }
});

defineObjectProperties(Array, {
  CASEINSENSITIVE: createConstant(1),
  DESCENDING: createConstant(2),
  UNIQUESORT: createConstant(4),
  RETURNINDEXEDARRAY: createConstant(8),
  NUMERIC: createConstant(16)
});
defineObjectProperties(Array.prototype, {
  sort: {
    value: (function() {
      var originalSort = Array.prototype.sort;
      return (function sort(compareFunction, options) {
        if (arguments.length <= 1 && typeof compareFunction !== 'number')
          return originalSort.apply(this, arguments);
        if (typeof compareFunction === 'number') {
          options = compareFunction;
          compareFunction = null;
        }
        var subject = !!(options & Array.UNIQUESORT) || !!(options & Array.RETURNINDEXEDARRAY) ?
          this.slice(0) : this;
        if (options & Array.CASEINSENSITIVE) {
          compareFunction = (function(x, y) {
            var valueX = String(x).toLowerCase();
            var valueY = String(y).toLowerCase();
            return valueX < valueY ? -1 : valueX == valueY ? 0 : 1;
          });
        }
        if (options & Array.NUMERIC) {
          compareFunction = (function(x, y) {
            var result = x - y;
            return result < 0 ? -1 : result > 0 ? 1 : 0;
          });
        }
        originalSort.call(subject, compareFunction);
        if (options & Array.UNIQUESORT) {
          for (var i = 1; i < subject.length; ++i) {
            if (subject[i - 1] !== subject[i])
              return; // keeping array unmodified
          }
          for (var i = 0; i < subject.length; ++i)
            this[i] = subject[i];
          subject = this;
        }
        if (options.DESCENDING)
          subject.reverse();
        return subject;
      });
    })(),
    enumerable: false
  },
  sortOn: {
    value: function sortOn(fieldName, options) {
      var comparer;
      if (options & Array.NUMERIC) {
        comparer = (function(x, y) {
          var valueX = Number(x[fieldName]);
          var valueY = Number(y[fieldName]);
          return valueX < valueY ? -1 : valueX == valueY ? 0 : 1;
        });
      } else if (options & Array.CASEINSENSITIVE) {
        comparer = (function(x, y) {
          var valueX = String(x[fieldName]).toLowerCase();
          var valueY = String(y[fieldName]).toLowerCase();
          return valueX < valueY ? -1 : valueX == valueY ? 0 : 1;
        });
      } else {
        comparer = (function(x, y) {
          var valueX = String(x[fieldName]);
          var valueY = String(y[fieldName]);
          return valueX < valueY ? -1 : valueX == valueY ? 0 : 1;
        });
      }
      return arguments.length <= 1 ? this.sort(comparer) :
        this.sort(comparer, options & ~(Array.NUMERIC | Array.CASEINSENSITIVE));
    },
    enumerable: false
  }
});

function createBuiltinType(obj, args) {
  if (obj === Array) {
    // special case of array
    var result = args;
    if (args.length == 1 && typeof args[0] === 'number') {
      result = [];
      result.length = args[0];
    }
    return result;
  }
  if (obj === Boolean || obj === Number || obj === Date ||
      obj === String || obj === Function)
    return obj.apply(null, args);
  if (obj === Object)
    return {};
}