import * as dao from "./dao.js";

function ModuleRoutes(app) {
  // create
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.createModule(cid, req.body);
    res.json(module);
  };
  app.post("/api/courses/:cid/modules", createModule);
  // find
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };
  app.get("/api/courses/:cid/modules", findAllModules);
  // delete
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  app.delete("/api/modules/:mid", deleteModule);
  // update
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }
  app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;