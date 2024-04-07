import model from "./model.js";
export const createModule = (cid, module) => {
    delete module._id;
    module.course = cid;
    return model.create(module);
};
export const findAllModules = () => model.find();
export const deleteModule = (mid) => model.deleteOne({ _id: mid });
export const updateModule = (mid, module) =>  model.updateOne({ _id: mid }, { $set: module });