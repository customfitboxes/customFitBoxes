function limitWords(content:any, wordLimit:any) {
    const words = content?.split(/\s+/);
    if (words.length > wordLimit) {
      const limitedContent = words?.slice(0, wordLimit).join(' ') + '...';
      return limitedContent;
    }
    return content;
  }

  export default limitWords