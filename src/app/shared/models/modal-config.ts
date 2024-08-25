export interface ModalConfig {
    modalTitle: string;
    labelBtnDismiss?: string;
    labelBtnConfirm?: string;
    isHeader?: boolean;
    isFooter?: boolean;
    shouldClose?(): Promise<boolean> | boolean
    shouldDismiss?(): Promise<boolean> | boolean
    onClose?(): Promise<boolean> | boolean
    onDismiss?(): Promise<boolean> | boolean
    disableCloseButton?(): boolean
    disableDismissButton?(): boolean
    hideDismissButton?(): boolean,

    animations?: {
        modal?: {
            enter?: string;
            leave?: string;
        };
        overlay?: {
            enter?: string;
            leave?: string;
        };
    };

    size?: {
        minWidth?: string;
        width?: string;
        maxWidth?: string;
        minHeight?: string;
        height?: string;
        maxHeight?: string;
    };
}