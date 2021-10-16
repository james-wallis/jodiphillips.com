async function shouldRedirect() {
  // const ua = (function() { return window.navigator.userAgent.toLowerCase(); })();
  // const inUA = function(value: string) { return (ua.search(value.toLowerCase()) >= 0); };
  // const mobile: boolean = inUA('android') || inUA('ios') || inUA('iphone') || inUA('ipod') || inUA('ipad');

  // if (mobile) {
  //     return true;
  // } else if (navigator.getVRDisplays) {
  //     try {
  //         const displays: any = await navigator.getVRDisplays();
  //         if (displays.length > 0)
  //             return true;
  //         else
  //             return false;
  //     } catch(err) {
  //         return false;
  //     }
  // }
  return false;
}

export async function redirectIfMobile(router, url) {
  const redirect = typeof window !== 'undefined' ? await shouldRedirect() : false;
  if (redirect) {
      router.push(url);
  }
}
