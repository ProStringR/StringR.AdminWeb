import {Injectable} from '@angular/core';
import {RacketStringModel} from '../model/model-racket-string';
import {RacketTypeEnum} from '../enum/enum-racket-type';
import {Constant} from '../utility/constant';

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

  public getStockStatus(racketString: RacketStringModel): string {

    const racketsRemaining = this.getRacketsRemaining(racketString);

    if (racketsRemaining <= 5) {
      return 'red_circle.png';
    } else if (racketsRemaining <= 10) {
      return 'yellow_circle.png';
    } else {
      return 'green_circle.png';
    }
  }

  public getRacketsRemaining(racketString: RacketStringModel): number {
    return Math.floor(racketString.length / Constant.metersStringPerRacket);
  }
}
