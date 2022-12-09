import http from "../http-common";

class AppaksesDataService {
  getAll() {
    return http.get("/approval_akses");
  }

  get(id) {
    return http.get(`/approval_akses/${id}`);
  }

  create(data) {
    return http.post("/approval_akses", data);
  }

  update(id, data) {
    return http.put(`/approval_akses/${id}`, data);
  }

  delete(id) {
    return http.delete(`/approval_akses/${id}`);
  }

  deleteAll() {
    return http.delete(`/approval_akses`);
  }

  findByTitle(ket) {
    return http.get(`/approval_akses?ket=${ket}`);
  }
}

export default new AppaksesDataService();