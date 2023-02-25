export interface IForm {
  onSubmit: <T>(data: T) => void;
  onCancel?: () => void;
}
