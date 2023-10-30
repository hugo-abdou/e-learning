
import { useLayoutConfigStore } from '@/@layouts/stores/config'
import { themeConfig } from '@themeConfig'

export const isDarkPreferred = usePreferredDark()

export const useThemeConfig = () => {
	const theme = computed({
		get() {
			return themeConfig.app.theme
		},
		set(value: typeof themeConfig.app.theme) {
			themeConfig.app.theme = value
			localStorage.setItem(`${themeConfig.app.title}-theme`, value.toString())

			// ℹ️ We will not reset semi dark value when turning off dark mode because some user think it as bug
			// if (value !== 'light')
			//   // eslint-disable-next-line @typescript-eslint/no-use-before-define
			//   isVerticalNavSemiDark = false
		},
	})

	const isVerticalNavSemiDark = computed({
		get() {
			return themeConfig.verticalNav.isVerticalNavSemiDark
		},
		set(value: typeof themeConfig.verticalNav.isVerticalNavSemiDark) {
			themeConfig.verticalNav.isVerticalNavSemiDark = value
			localStorage.setItem(`${themeConfig.app.title}-isVerticalNavSemiDark`, value.toString())
		},
	})



	/*
	  ℹ️ Set current theme's surface color in localStorage
  
	  Why? Because when initial loader is shown (before vue is ready) we need to what's the current theme's surface color.
	  We will use color stored in localStorage to set the initial loader's background color.
  
	  With this we will be able to show correct background color for the initial loader even before vue identify the current theme.
	*/


	const skin = computed({
		get() {
			return themeConfig.app.skin
		},
		set(value: typeof themeConfig.app.skin) {
			themeConfig.app.skin = value
			localStorage.setItem(`${themeConfig.app.title}-skin`, value)
		},
	})

	// `@layouts` exports
	const {
		navbarType,
		isNavbarBlurEnabled,
		footerType,
		isVerticalNavCollapsed,
		appContentWidth,
		appContentLayoutNav,
		horizontalNavType,
		isLessThanOverlayNavBreakpoint
	} = useLayoutConfigStore()

	// const syncRtlWithRtlLang = (rtlLangs: string[], rtlDefaultLocale: string, ltrDefaultLocale: string) => {
	// const { locale } = useI18n({ useScope: 'global' })

	// watch(isAppRtl, val => {
	//   if (val)
	//     locale = rtlDefaultLocale
	//   else locale = ltrDefaultLocale
	// })
	// watch(locale, val => {
	//   if (rtlLangs.includes(val))
	//     isAppRtl = true
	//   else isAppRtl = false
	// })

	// watch(
	//   [isAppRtl, locale],
	//   ([valIsAppRTL, valLocale], [oldValIsAppRtl, oldValLocale]) => {
	//     const isRtlUpdated = valIsAppRTL !== oldValIsAppRtl

	//     if (isRtlUpdated) {
	//       if (valIsAppRTL)
	//         locale = rtlDefaultLocale
	//       else locale = ltrDefaultLocale
	//     }
	//     else {
	//       if (rtlLangs.includes(valLocale))
	//         isAppRtl = true
	//       else isAppRtl = false
	//     }
	//   },
	// )
	// }

	return {
		theme,
		isVerticalNavSemiDark,
		skin,

		// @layouts exports
		navbarType,
		isNavbarBlurEnabled,
		footerType,
		isVerticalNavCollapsed,
		appContentWidth,
		appContentLayoutNav,
		horizontalNavType,
		isLessThanOverlayNavBreakpoint,

		// syncRtlWithRtlLang,
	}
}
