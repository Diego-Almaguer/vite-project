import { create } from 'zustand';
import useProfile from '../hooks/useProfile';
import GetProfile from '../services/getProfile';
import { GetMunicipio } from '../services/getMunicipio';
import { GetOsde } from '../services/getOsde';

const useBearStore = create((set) => ({
  profile: null,
  user:null,
  municipio:[],
  osde:[],

  loadOsdes: async()=>{
    try {
      const osdes= await GetOsde()
      
      set({osde:osdes})
    } catch (error) {
      console.error('Error loading municipios:', error);
    }

  },

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

  removeProfile: () => set((state) => ({ profile: state.profile })),
  
}));

export default useBearStore;