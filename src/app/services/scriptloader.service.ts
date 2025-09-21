import { CommonModule } from '@angular/common';

    import { Injectable } from '@angular/core';
    import { Renderer2 } from '@angular/core';
    import { RendererFactory2 } from '@angular/core';


    @Injectable({
      providedIn: 'root'
    })
    export class ScriptLoaderService {
      public renderer:Renderer2;
      constructor(private _renderer:RendererFactory2){
        this.renderer =this._renderer.createRenderer(null, null);
      }


      loadScript(scriptName: string): Promise<void> {
        return new Promise((resolve, reject) => {
          let node= this.renderer.createElement('script');
         node.src = `assets/js/${scriptName}.js`; // Ruta de tu script en la carpeta assets
          node.type = 'text/javascript';
          node.async = true;
          node.onload = () => resolve(); // Resuelve la promesa cuando el script ha cargado
          node.onerror = (error:any) => reject(error); // Rechaza la promesa si hay un error
          document.getElementsByTagName('head')[0].appendChild(node); // Agrega el script al head
        });
      }
    }