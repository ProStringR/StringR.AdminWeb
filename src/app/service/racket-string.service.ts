import {Injectable} from '@angular/core';
import {RacketStringModel} from '../model/model-racket-string';
import {RacketTypeEnum} from '../enum/enum-racket-type';

@Injectable()
export class RacketStringService {

  public getRacketStringDescription(racketString: RacketStringModel): string {
    return racketString.brand + ' | ' + racketString.modelName + ' | ' + racketString.thickness;
  }

  public getStringTypeIndicator(racketString: RacketStringModel): string {
    console.log(RacketTypeEnum.TENNIS);

    if (racketString.stringPurpose === RacketTypeEnum.TENNIS) {
      return 'tennisball.png';
    } else if (racketString.stringPurpose === RacketTypeEnum.BADMINTON) {
      return 'shuttlecock.png';
    }

    return 'squashball.png';
  }
}
