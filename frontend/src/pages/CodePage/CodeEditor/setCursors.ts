function generateRandomColor(saturation:number, brightness:number) {
    var hue = Math.floor(Math.random() * 360); // generate a random hue value between 0 and 360
    var color = "hsl(" + hue + ", " + saturation + "%, " + brightness + "%)";
    return color;
}
  
function addCursorStyle(id:any, color:any) {
    console.log("added cursor for ", id, color);
    let style = document.createElement("style");
    style.innerHTML = `
      .yRemoteSelection-${id} {
        background-color: ${color};
        opacity: 0.4;
      }
  
      .yRemoteSelectionHead-${id} {
        position: absolute;
        border-left: ${color} solid 2px;
        border-top: ${color} solid 2px;
        border-bottom: ${color} solid 2px;
        height: 100%;
        box-sizing: border-box;
      }
      .yRemoteSelectionHead-${id}::after {
        position: absolute;
        content: ' ';
        border: 3px solid ${color};
        border-radius: 4px;
        left: -4px;
        top: -5px;
      }
    `;
    document.head.appendChild(style);
  }
  
  function setInitialUserCursor(provider: any) {
    let clients:any = provider.awareness?.getStates();
    if (!clients) return

    clients = [...clients.values()]
      .filter((clientObj) => clientObj.user != null)
      .map((clientObj) => clientObj.user);
  
    clients.forEach((client:any) => addCursorStyle(client.id, client.color));
}
  
const setCursors = (clientID:number, provider: any) => {
    const name = Math.floor(Math.random() * 1000);
    const color = generateRandomColor(50, 80);
  
    console.log("self : ", clientID, name, color);
  
    setInitialUserCursor(provider);
  
    provider.awareness?.setLocalStateField("user", {
      name: name,
      color: color,
      id: clientID,
    });
  
    provider.awareness?.on("update", (changes:any) => {
      if (!changes || changes.added.length == 0) return;
      let clients = provider.awareness?.getStates();
  
      for (let clientID of changes.added) {
        if (!clients || !clients.get(clientID) || !clients.get(clientID)?.user) continue;
        console.log("added ", clientID, clients.get(clientID));
  
        addCursorStyle(
          clients.get(clientID)?.user.id,
          clients.get(clientID)?.user.color
        );
      }
    });
};
  
export default setCursors;
  