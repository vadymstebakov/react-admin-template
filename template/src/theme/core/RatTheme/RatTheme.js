import { memo, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { selectMainTheme } from '@store/modules/theme/settings/settingsSlice';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const RatTheme = props => {
    const direction = useSelector(({ theme }) => theme.settings.defaults.direction);
    const mainTheme = useSelector(selectMainTheme);

    useEnhancedEffect(() => {
        document.body.dir = direction;
    }, [direction]);

    // console.warn('RatTheme:: rendered',mainTheme);
    return <ThemeProvider theme={mainTheme}>{props.children}</ThemeProvider>;
};

export default memo(RatTheme);
