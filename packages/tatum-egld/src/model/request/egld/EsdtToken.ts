import {IsIn, IsOptional, Length, ValidateIf} from 'class-validator';

export enum EgldServiceType {
  issue = 'issue',
  issueNonFungible = 'issueNonFungible',
  issueSemiFungible = 'issueSemiFungible',
  ESDTNFTCreate = 'ESDTNFTCreate',
  stopNFTCreate = 'stopNFTCreate',
  ESDTTransfer = 'ESDTTransfer',
  localMint = 'localMint',
  localBurn = 'localBurn',
  pause = 'pause',
  unPause = 'unPause',
  freeze = 'freeze',
  unFreeze = 'unFreeze',
  wipe = 'wipe',
  setSpecialRole = 'setSpecialRole',
  unSetSpecialRole = 'unSetSpecialRole',
  transferOwnership = 'transferOwnership',
  controlChanges = 'controlChanges',
  transferNFTCreateRole = 'transferNFTCreateRole',
  ESDTNFTAddQuantity = 'ESDTNFTAddQuantity',
  ESDTNFTBurn = 'ESDTNFTBurn',
  freezeSingleNFT = 'freezeSingleNFT',
  wipeSingleNFT = 'wipeSingleNFT',
  unFreezeSingleNFT = 'unFreezeSingleNFT',
  ESDTNFTTransfer = 'ESDTNFTTransfer',
}

export class EsdtToken {
    @IsOptional()
    @Length(1, 63)
    @IsIn(Object.keys(EgldServiceType))
    public service?: string;

    @ValidateIf(o => !['issue', 'issueNonFungible', 'issueSemiFungible'].includes(o.service))
    @IsOptional()
    @Length(10, 17)
    public tokenId?: string;
}
