const router = require('express').Router();
const { Favorite } = require('../../db/models'); // чтобы обратится к базе не забываем подключить модель нужную
  // в роутеры подтягиваем компоненты с кем работаем



router.delete('/:id',async(req,res)=>{
    try{

        const{id}=req.params
        const result=await Favorite.destroy({where:{id}})
        if(result){
            res.json({message:'success'})
        }
    }
    catch ({ message }) {
        res.status(500).json({ error: message });
      }
})
// router.post('/', async (req, res) => {
//   try { 
//     const {
//     } = req.body;
//     console.log(req.body);
//     const data = {
//       title,
//       description,
//       price,
//       categoryId,
//       userId: res.locals.user.id
//     };
//     const product = await Favorite.create(data); // формируем пролдукт новый 
//     if (product) {
//       // здесь важно правильно отправить форму
//       const html = res.renderComponent(ProductItem, { product }, { doctype: false });
//       res.status(201).json({ message: 'success', html });
//     }
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });
module.exports=router