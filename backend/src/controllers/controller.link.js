import LINK from "../models/model.link.js"
export async function linkShrink(req, res) {
    const {actualLink,shrinkedLink} = req.body
    try{
        var link = await LINK.findOne({shrinkedLink})
        if (link) {
            res.json({
                success:false,
                message:"Link is Already available. Try Another."
            })
            return 0
        }
        link = await LINK.create({
            actualLink,
            shrinkedLink
        })
        res.json({
            success:true,
            message:"Link Shrinked Successfully."
        })
    }catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }
}
export async function linkGet(req, res) {
    const {shrinkedLink} = req.body
    try{
        var link = await LINK.findOne({shrinkedLink})
        if (link) {
            res.json({
                success:true,
                link:link
            })
        }
        res.json({
            success:false,
            message:"Link Not Found"
        })
    }catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }
}
