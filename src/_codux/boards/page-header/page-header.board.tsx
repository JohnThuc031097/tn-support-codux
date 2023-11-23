import { createBoard } from '@wixc3/react-board';
import { PageHeader } from '../../../components/page-header/page-header';

export default createBoard({
    name: 'PageHeader',
    Board: () => <PageHeader />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 640,
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
        }, windowWidth: 1024
    }
});
