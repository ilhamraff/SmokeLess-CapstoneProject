const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1);
    const urlsSplits = url.split("/");

    // Menggunakan `decodeURIComponent` untuk mempertahankan huruf besar kecil asli
    const id = decodeURIComponent(urlsSplits[2]) || null;

    return {
      resource: urlsSplits[1] || null,
      id: id,
      verb: urlsSplits[3] || null,
    };
  },

  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      (splitedUrl.id ? "/:id" : "") +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : "")
    );
  },
};

export default UrlParser;
