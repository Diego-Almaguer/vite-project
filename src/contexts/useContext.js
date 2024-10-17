import { create } from 'zustand';
import useProfile from '../hooks/useProfile';
import GetProfile from '../services/getProfile';
import { GetMunicipio } from '../services/getMunicipio';

const useBearStore = create((set) => ({
  profile: null,
  user:null,
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
      console.log('Profile:', profile);
      console.log('User:', user);
      set({user:user});
      set({profile:profile} );
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },

  removeProfile: () => set({ profile: {} }),
}));

export default useBearStore;