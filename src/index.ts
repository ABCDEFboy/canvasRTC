export default class CanvasRTC {
	fps = 60; // 捕获速率，先默认是60fps

	// 录制的canvas元素
	canvas: HTMLCanvasElement;

	mediaSource: MediaSource;

	mediaStream: MediaStream;

	public constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}

	// 浏览器是否支持
	isSupportMediaSource() {
		return !!MediaSource && "MediaSource" in window;
	}

	// 初始化实时视频捕获的画布
	public initMediaSource() {
		this.mediaSource = new MediaSource();
		this.mediaStream = this.canvas.captureStream(this.fps);

		// 学一手链式调用
		return this;
	}
}
