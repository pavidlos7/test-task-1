interface ICharacterOrigin {
  name: string
}

interface ICharacterLocation {
  name: string
}

export default interface ICharacter {
  id: number,
  name: string,
  image: string,
  status: string,
  type: string,
  gender: string,
  origin: ICharacterOrigin,
  location: ICharacterLocation,
}
