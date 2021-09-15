import { memo } from 'react';
import RatShortcuts from '@theme/core/RatShortcuts';
import RatSidePanel from '@theme/core/RatSidePanel';

function LeftSideLayout3() {
    return (
        <>
            <RatSidePanel>
                <RatShortcuts className="py-16 px-8" variant="vertical" />
            </RatSidePanel>
        </>
    );
}

export default memo(LeftSideLayout3);
