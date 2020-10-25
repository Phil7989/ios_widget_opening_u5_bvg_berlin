let widget = await createWidget()
if (!config.runsInWidget) {
  await widget.presentSmall()
}

Script.setWidget(widget)
Script.complete()

async function createWidget(items) {

  	const list = new ListWidget()
  	list.backgroundColor = new Color("#FFFFFF")
  	fontcolor = new Color("#7E5330")
  
  	let row = list.addStack()
  	row.layoutHorizontally()
  
  	let column1 = row.addStack()
    column1.layoutVertically()
    column1.backgroundColor = fontcolor
    column1.setPadding(0, 4, 0, 4)
  
    const headerText = column1.addText("U5")
    headerText.leftAlignText()
    headerText.font = Font.mediumSystemFont(25)
    headerText.textColor = Color.white()
     
    let column2 = row.addStack()
    column2.layoutVertically()
    column2.setPadding(-5, 40, 0, 0)
  
     
    let icon = await getImage('t--Ubavr_400x400.jpg')
  	let iconImg = column2.addImage(icon)
  	iconImg.imageSize = new Size(40, 40)
  	iconImg.rightAlignImage
    
    const header2 = list.addText("LÜCKENSCHLUSS")
    header2.leftAlignText()
    header2.font = Font.mediumSystemFont(8)
    header2.textColor = fontcolor
    
   	list.addSpacer()
  
  	var today = new Date().getTime()
  	var open = new Date('2020-12-03').getTime()
  	var days = parseInt((open - today)/ (1000 * 3600 * 24))
  
  	const labelfirst = list.addText(days + " Tage")
	labelfirst.font = Font.boldSystemFont(28)
  	labelfirst.textColor = fontcolor
  
  	const label = list.addText("bis Eröffnung")
  	label.font = Font.boldSystemFont(14)
  	label.textColor = fontcolor
  
  return list
}
async function getImage(image) {
    let fm = FileManager.local()
    let host = "https://pbs.twimg.com/profile_images/1317130086278156294/";
    let dir = fm.documentsDirectory()
    let path = fm.joinPath(dir, image)
    if (fm.fileExists(path)) {
        return fm.readImage(path)
    } else {
        // download once
        let imageUrl = host + image
        let iconImage = await loadImage(imageUrl)
        fm.writeImage(path, iconImage)
        return iconImage
    }
}
async function loadImage(imgUrl) {
    const req = new Request(imgUrl)
    return await req.loadImage()
}
