export type GenericProps = {
  // react generic props
  children?: React.ReactNode[] | React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void

  // accept any key
  [key: string]: any
}
