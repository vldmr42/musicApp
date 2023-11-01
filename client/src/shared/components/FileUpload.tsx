import React, { ReactNode, useRef } from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
    children?: ReactNode;
}

const FileUpload = (props: FileUploadProps) => {
    const { setFile, accept, children } = props;
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFile(e.target.files[0]);
    };
    return (
        <div onClick={() => ref.current?.click()}>
            <input
                ref={ref}
                type="file"
                accept={accept}
                style={{ display: 'none' }}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
