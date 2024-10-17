import { create } from 'zustand';
import useProfile from '../hooks/useProfile';
import GetProfile from '../services/getProfile';
import { GetMunicipio } from '../services/getMunicipio';

const useBearStore = create((set) => ({
  profile: {},
  user:{},
  municipio:[],
  
  loadMunicipios: async()=>{
    try {
      const municipios= await GetMunicipio()
      
      set({municipio:municipios})
    } catch (error) {
      console.error('Error loading municipios:', error);
    }

  },
  setProfile: (newProfile) => set({ profile: newProfile }),

  loadProfile: async(userId) => {
    try {
      const profile = await GetProfile({userId});
      const {user}=await GetProfile({userId})
      
      set({user:user});
      set({profile:profile} );
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },

  removeProfile: () => set({ profile: {} }),
}));

export default useBearStore;