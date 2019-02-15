import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    let image ='';
    if(images && images.length>0){
      image = images[0].url;
    }else{
      image = 'assets/img/noimage.png'
    }
    return image;
  }

}
