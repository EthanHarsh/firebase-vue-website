import { useMediaQuery } from 'react-responsive'



function MediaQueries (fn) {
    const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div>
        {isMobileDevice && <fn.Mobile />}
        {isTabletDevice && <>
        <fn.TabletMobile />
        {isDesktop && <fn.Desktop />}
        {isLaptop && <fn.Laptop />}
        {isBigScreen && <fn.BigScreen />}
      </>}
    </div>
  )
}

export default MediaQueries;
