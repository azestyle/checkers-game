export function calculateMovie(element, collNumber) {
    let keepElement = [];
    const childElement = element?element.querySelectorAll(".bg-black"):null;
    if (childElement) {
      childElement.forEach((el) => {
        if (el.getAttribute("value") === (collNumber - 1).toString()) {
          keepElement.push(el);
        }
        if (el.getAttribute("value") === (Number(collNumber) + 1).toString()) {
          keepElement.push(el);
        }
      });
    }
    
    return keepElement;
  }