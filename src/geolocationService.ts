
interface GeoOptions {
  enableHighAccuracy: boolean
}

type GeopositionResponse = Geoposition | PositionError

export type Geoposition = {
  coords: {
    latitude: number,
    longitude: number
  }
}

export type PositionError= {
  code: number,
  message: string
}

const defaultOptions: GeoOptions = {
  enableHighAccuracy: true
}

export const getCurrentPosition = (options: GeoOptions = defaultOptions): Promise<GeopositionResponse> => {
  return new Promise((resolve, reject) => {
    const success = (position: Geoposition): void => {
      resolve(position)
    }
    const failure = (error: PositionError): void => {
      reject(error)
    }

    navigator.geolocation.getCurrentPosition(success, failure, options)
  })
}