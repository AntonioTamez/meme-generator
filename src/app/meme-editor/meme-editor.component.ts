import { CommonModule } from '@angular/common';
import { Component, AfterViewChecked, ChangeDetectorRef, ViewChildren, QueryList, ElementRef  } from '@angular/core';
import interact from 'interactjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meme-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './meme-editor.component.html',
  styleUrl: './meme-editor.component.css'
})
export class MemeEditorComponent implements AfterViewChecked {
  @ViewChildren('textElement') textElements: QueryList<ElementRef> = new QueryList<never>();

  constructor(private cdr: ChangeDetectorRef) {}

  imageSrc: string | null = null;
  texts: {
    content: string;
    color: string;
    size: number;
    x: number;
    y: number;
    rotation: number;
  }[] = [];
  newText = { content: '', color: '#000000', size: 20, x: 50, y: 50, rotation: 0 }; 

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = e.target?.result as string);
      reader.readAsDataURL(input.files[0]);
    }
  }

  addText() {
    console.log({ ...this.newText })
    this.texts.push({ ...this.newText });
    this.newText.content = '';
    console.log(this.texts);
  }

  downloadMeme() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !this.imageSrc) return;

    const image = new Image();
    image.src = this.imageSrc;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      this.texts.forEach((text) => {
        ctx.font = `${text.size}px Arial`;
        ctx.fillStyle = text.color;
        ctx.save();
        ctx.translate(text.x, text.y);
        ctx.rotate((text.rotation * Math.PI) / 180);
        ctx.fillText(text.content, 0, 0);
        ctx.restore();
      });

      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
    // Verifica que los elementos están siendo seleccionados correctamente
    console.log('Text Elements:', this.textElements);
    
    this.textElements.forEach((elementRef, index) => {
      interact(elementRef.nativeElement)
        .draggable({
          listeners: {
            move: (event) => {
              console.log('Moving element', event);
              const target = event.target;
              const index = parseInt(target.getAttribute('data-index') || '0', 10);
              this.texts[index].x += event.dx; // mueve el texto en el eje X
              this.texts[index].y += event.dy; // mueve el texto en el eje Y
              console.log(`Nuevo valor x: ${this.texts[index].x}, y: ${this.texts[index].y}`);
            },
          },
        })
        .gesturable({
          listeners: {
            move: (event) => {
              const target = event.target;
              const index = parseInt(target.getAttribute('data-index') || '0', 10);
              this.texts[index].rotation += event.da;
            },
          },
        });
    });
  }
}
