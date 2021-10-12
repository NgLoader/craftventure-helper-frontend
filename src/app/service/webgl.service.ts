import { Injectable } from '@angular/core';
import { THREE } from '../../../node_modules/three'

@Injectable({
  providedIn: 'root'
})
export class WebglService {

  private renderingContext: RenderingContext;

  constructor() {
  }

  initContext(canvas: HTMLCanvasElement) {
    this.renderingContext = canvas.getContext('webgl');
    if (!this.gl) {
      alert('Unable to initialize WebGL!');
      return;
    }

    this.setCanvasDimension(canvas);
    this.initCanvas();
  }

  initCanvas() {
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }

  setCanvasDimension(canvas: HTMLCanvasElement) {
    this.gl.canvas.width = canvas.width;
    this.gl.canvas.height = canvas.height;
  }

  private get gl(): WebGLRenderingContext {
    return this.renderingContext as WebGLRenderingContext;
  }
}
