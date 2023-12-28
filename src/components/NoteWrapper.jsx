import {Spin } from 'antd';
import dynamic from 'next/dynamic';

// disables serverside rendering for quill.
const QuillWrapper = dynamic(
    import('react-quill'),
     {
        ssr: false, 
        loading: () => <Spin />

    }
);

export default QuillWrapper;