import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 500,
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 300
    }
});
