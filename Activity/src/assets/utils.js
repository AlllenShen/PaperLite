var utils = {
    setCookie(name, value, expires = 3 * 24 * 60 * 60) {
        document.cookie = name + "=" + escape(value) + ";expires=" + expires;
    },
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    getQueryString(name) {
        let reg = `(^|&)${name}=([^&]*)(&|$)`
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null; 
    }
}

export default utils