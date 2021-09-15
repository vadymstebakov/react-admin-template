import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { dialogActions } from '@store/modules/global/dialog';

function RatDialog(props) {
    const dispatch = useDispatch();
    const state = useSelector(({ global }) => global.dialog.state);
    const options = useSelector(({ global }) => global.dialog.options);

    return (
        <Dialog
            open={state}
            onClose={ev => dispatch(dialogActions.closeDialog())}
            aria-labelledby="rat-dialog-title"
            classes={{
                paper: 'rounded-8',
            }}
            {...options}
        />
    );
}

export default RatDialog;
