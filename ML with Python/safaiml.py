
# coding: utf-8

# In[23]:


import numpy as np


# In[24]:


x = np.random.rand(75,1)+27
x_= np.random.rand(75,1)+75


# In[25]:


sev= np.random.rand(75)*5


# In[26]:


for i in range(0,75):
    
    sev[i]=int(sev[i])


# In[27]:


c= np.concatenate([x,x_],axis=1)


# In[28]:


g= np.c_[c,sev]
g=g[0:75,:]


# In[29]:


v=[]
for i in range(0,75):
    for j in range(i+1,76):
        #print(j)
        v.append((i,j))
len(v)


# In[30]:


len(v)
l=np.random.rand(2850,1)*50
for i in range(0,2850):
  
    l[i]=int(l[i])


# In[31]:


x=np.c_[v,l]
x.shape


# In[32]:


import pandas as pd
df=pd.DataFrame(g)
df1=pd.DataFrame(x)
df['index']=df.index
df1['index']=df1.index
df=df.sort_values([2],ascending=False)


# In[18]:


df.columns=['latitude','longitude','severity','index']
df.shape[0]
df1.columns=['A','B','dist','index']
df1


# In[37]:


done=[]
prev_state=None
prev_dist = 99999
for i in range(df.shape[0]):
    if(df.at[i,'severity']==4):
        done.append(i)
        state=i

        
        
        
while(len(done)<df.shape[0]):
    for i in range(df1.shape[0]):
        #print(i)
        if (df1.at[i,'A']==state or df1.at[i,'B']==state):
            df1.at[i,'dist']
            if (df1.at[i,'dist']<=prev_dist):
                if(df1.at[i,'A'] not in done):
                    prev_state=df1.at[i,'A']
                    prev_dist=df1.at[i,'dist']
                elif (df1.at[i,'B'] not in done):
                    prev_state=df1.at[i,'A']
                    prev_dist=df1.at[i,'dist']
    
    state=prev_state
    done.append(state)
    prev_dist=999999
    prev_state=None




# In[35]:


done


# In[36]:


df1=df1.sort_values([2],ascending=False)


# In[25]:


df1

