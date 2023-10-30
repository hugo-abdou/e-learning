export async function createBlobFromDataString(dataString: string) {
  return await fetch(dataString).then(res => res.blob())
}
export async function createFileFromDataString(dataString: string, fileName: string) {
  const blob = await createBlobFromDataString(dataString)

  return new File([blob], fileName, { type: blob.type })
}

export async function readFileAsDataURL(file: File | Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      typeof reader.result === 'string' ? resolve(reader.result) : reject('result is not a string')
    }
    reader.onerror = error => {
      reject(error)
    }
    reader.readAsDataURL(file)
  })
}

export function extractUuidFromUrl(url: string) {
  const uuidRegex = /([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i
  const match = url.match(uuidRegex)

  return match ? match[0] : null
}

export function debounce(func: Function, delay: number) {
  let timeoutId: any

  return () => {
    // @ts-expect-error
    const context = this
    const args = arguments

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

class storageClass {
  storagePath
  https = false
  constructor(path: string, https = false) {
    this.https = https
    this.storagePath = path.replace('public', 'storage')

    return this
  }

  url = () => {
    const appurl = window.location.origin

    return `${appurl}/${this.storagePath}`
  }

  path = () => this.storagePath
}

export function storage(path: string, https?: boolean) {
  return new storageClass(path, https)
}

export async function delay(time: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve({}), time)
  })
}
export function base642file(base64: string, name: string) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--)
    u8arr[n] = bstr.charCodeAt(n)

  return new File([u8arr], name, { type: mime })
}
export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes)
    return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}
export function calculateAspectRatio(width: number, height: number) {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const divisor = gcd(width, height)
  const aspectWidth = width / divisor
  const aspectHeight = height / divisor

  return `${aspectWidth}/${aspectHeight}`
}
export function calculateWordsToDisplay(containerWidth: number, text: string, opt: { charWidth?: number; maxLines?: number }) {
  const charWidth = opt?.charWidth || 8
  const maxLines = opt?.maxLines || 1
  const estimatedCharCount = Math.floor(containerWidth / (charWidth * maxLines))
  let charactersToDisplay = text.slice(0, estimatedCharCount)
  if (charactersToDisplay.length < text.length)
    charactersToDisplay += '...'

  return charactersToDisplay
}
export function secondsToMinutes(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = (seconds % 60).toFixed(0)

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  if (hours > 0)
    return `${String(hours).padStart(2, '0')}:${formattedTime}`

  return formattedTime
}
