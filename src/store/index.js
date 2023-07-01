import { createStore } from 'vuex'
const dataUrl = "https://thotyelwa5.github.io/vueData/Data/"
export default createStore({
  state: {
    Testimonials : null,
    about : null,
    skills : null,
    experience : null,
    education: null,
    Projects: null
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials
    },
    setAbout(state, about) {
      state.about = about
    },
    setSkills(state, skills) {
      state.skills = skills
    },
    setExperience(state, experience) {
      state.experience = experience
    },
    setEducation(state, education) {
      state.education = education
    },
    setProjects(state, Projects) {
      state.Projects = Projects
    },

  },
  actions: {
    async fetchTestimonials(context) {
      try {
        let testimonialResponse = await fetch(dataUrl)
        let { Testimonials } = await testimonialResponse.json()
        context.commit('setTestimonials', Testimonials)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchProjects(context) {
      try {
        let projectsResponse = await fetch(dataUrl)
        let { Projects } = await projectsResponse.json()
        context.commit('setProjects', Projects)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchSkills(context) {
      try {
        let skillsResponse = await fetch(dataUrl)
        let { Skills } = await skillsResponse.json()
        context.commit('setSkills', Skills)
      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {
  }
})



