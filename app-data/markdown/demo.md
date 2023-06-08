#HackFS Journal

### June 1

Hackathon team forming meeting notes

FVM Hackathon cheatsheet
https://github.com/filecoin-project/community/discussions/585

FVM vs EVM doc
https://docs.filecoin.io/smart-contracts/filecoin-evm-runtime/differences-with-ethereum/

Prizes
https://ethglobal.com/events/hackfs2023/prizes

web3 ai
https://eden.art/
https://medium.com/@genekogan/provenance-on-eden-d80dacce572a
super nerdy guy
https://www.genekogan.com/workshops/
decentralized ai from 2017
https://docs.google.com/presentation/d/1RI6BnBsJtTBg3djZbD1hDjuhQagPBAUtAqcqoYWQTxU/edit

pre built ideas
https://ecosystem-wg.notion.site/7d70e8503de64050b765b1fde8dca4d8?v=ad0e8b62ef51486598750abd1195a49b

Dave Huseby is in charge of libp2p
dwh#3620 on discord

### June 2

Intro video
https://www.youtube.com/watch?v=pguDMbnKK6E

mentinoed "Bacalauh is good for ai projects?"

p2p comsumar apps category:

"Best use of Helia, Kubo or other IPFS"
5k split between 5 teams = $1k

Lit actions for group access to encrypted github stuff yes?
DataOS
polybase is web3 suapbase?

Filecoin Data Tools "Suit"
$5k for 5 teams - $1k

Lighthouse SDK $2500 sdk

"Timelock encryption" via drand

vision

Most important things

- [ ] react-flow + [[Tauri]]
- [ ] save react-flow to [[IPFS]]
- [ ] talk to model via [[libp2p]]

look into how dendron does it. they are a vscode plugin

tauri looking liike an option for ipfs local
https://github.com/ipfs/ipfs-desktop/issues/2184
but they opted for wails

tauri ipfs 2021
https://github.com/tauri-apps/tauri/issues/2564

push protocol

polybase could be the queue?

Kubo in rust?
https://iroh.computer/

Rustaceans: Rusty Tools to Build your Game
https://medium.com/@dwulf69/rustaceans-rusty-tools-to-build-your-game-fc22399c9ab8

Easy to add email sending to an agent

git with [[GitOxide]] and maybe [[IPFS]]
https://github.com/josephvoss/git-remote-s3

## How to Write a New Git Protocol

https://rovaughn.github.io/2015-2-9.html

use neon as sidecar?
https://github.com/neondatabase/neon#running-local-installation

Isolation For Tauri Apps
https://tauri.app/v1/references/architecture/inter-process-communication/isolation

Chainlit and langflow
https://docs.chainlit.io/overview

Tauri Rust Python
https://github.com/tauri-apps/tauri/discussions/2759

### June 5

LibP2P session
https://www.youtube.com/watch?v=gOQSTaeAjc0

look at "universal connectivity" repo
https://universal-connectivity.vercel.app/

"Secure Scutlebut" "Nostr"
but pulling networking stack out
https://en.wikipedia.org/wiki/Secure_Scuttlebutt

Lip2p Curl?

OPen Source Notion Alternatives
https://www.opensourcealternative.to/alternatives-to/Notion

### June 6

Might use [[FlowWise]] vs [[Langflow]] because its a fully js implementation

Using this as inspiration for setting up python in Tauri
https://github.com/drumni/tauri-rust-py

WIP Tauri Docs?
https://jonaskruckenberg.github.io/tauri-docs-wip/examples/sidecar.html

[[MdSilo]]

CodeBerg -> Git hosting
https://codeberg.org/

https://github.com/spacedriveapp/spacedrive

> Spacedrive is an open source cross-platform file explorer, powered by a virtual distributed filesystem written in Rust.

```txt
This project is using what I'm calling the **"PRRTT"** stack (Prisma, Rust, React, TypeScript, Tauri).

- Prisma on the front-end? 🤯 Made possible thanks to [prisma-client-rust](https://github.com/brendonovich/prisma-client-rust), developed by [Brendonovich](https://github.com/brendonovich). Gives us access to the powerful migration CLI in development, along with the Prisma syntax for our schema. The application bundles with the Prisma query engine and codegen for a beautiful Rust API. Our lightweight migration runner is custom built for a desktop app context.
- Tauri allows us to create a pure Rust native OS webview, without the overhead of your average Electron app. This brings the bundle size and average memory usage down dramatically. It also contributes to a more native feel, especially on macOS due to Safari's close integration with the OS.
- We also use [rspc](https://rspc.dev/) which allows us to define functions in Rust and call them on the Typescript frontend in a completely typesafe manner, so no unnecessary bugs make it into production!
- The core (`sdcore`) is written in pure Rust.
```

[[Mantine]]

Tauri Plugin Store
https://github.com/tauri-apps/plugins-workspace

#### DRAND HackFS Workshop

Timelock Encryption
https://www.youtube.com/watch?v=qblONRshZjA

"Decentralized Threshold Network"
![[Pasted image 20230606130214.png|500]]

https://github.com/drand/drand
https://drand.love/

![[Pasted image 20230606131412.png|500]]

https://github.com/iprs-dev/drand-rs

use "dee" => https://github.com/thibmeu/drand-rs

[[AGE Actually Good Encryption]]

Rust Encryption
https://github.com/rust-cc/awesome-cryptography-rust

Doing this whole tauri course today
https://www.youtube.com/watch?v=BbZmLXBDGnU&list=PLmWYh0f8jKSjt9VC5sq2T3mFETasG2p2L&index=1

python + electron
https://efficientcoder.net/using-python-with-electron-tutorial/

custom scrollbars ro react ( Like don't do it with the header )
https://github.com/grsmto/simplebar

[[Solid State Apps]]

open source [[Notion]]
[[Appflowy]]

"Watch filesystem" plugin for Tauri
https://github.com/tauri-apps/plugins-workspace/tree/v1/plugins/fs-watch

Local Wrapper of ChatGPT with Tauri
https://github.com/lencx/ChatGPT
Another
https://github.com/Bin-Huang/chatbox
Chat with all agents at once
https://github.com/sunner/ChatALL
Create Local Anything
https://github.com/tw93/Pake

Build Api Endpoint from Tauri
https://www.rspc.dev/

LLMS Chain in rust

https://llm-chain.xyz/

Loading Langflow
https://github.com/logspace-ai/langflow#-creating-flows

langchain serve
https://github.com/jina-ai/langchain-serve

### June 7

Use LLamaIndex to create vectors of everything
https://github.com/jerryjliu/llama_index

Template I am using
https://github.com/elibroftw/modern-desktop-app-template

Python via rust Python Interpreter
https://stackoverflow.com/questions/75913627/how-to-use-tauri-app-and-python-script-as-a-back-end

PyWryy
https://openbb.co/blog/introducing-pywry
OpenBB ( bloomberg )
https://github.com/OpenBB-finance/OpenBBTerminal

Discord convo about Python Sidecar
https://discord.com/channels/616186924390023171/731495028677148753/1116143966002356264

ChatGPT answer about answer

```txt
In the context you provided, "bundling as a resource" refers to including your dependencies or virtual environment as a resource within your Tauri application. Instead of relying on PyInstaller to extract the bundled files to a temporary directory during runtime, you would package them directly as part of your Tauri application's build.

By bundling your dependencies as a resource, you can avoid the extraction step performed by PyInstaller, which can help speed up the startup time of your application.

To accomplish this, you would typically include the necessary files or directories within your Tauri project and configure Tauri to access them appropriately. This may involve modifying your Tauri configuration (`tauri.conf.json`) and specifying the paths to the bundled files or directories.

For example, if you have a virtual environment containing your Python dependencies, you would include the entire virtual environment directory within your Tauri project and specify its path in the Tauri configuration. Tauri can then access the bundled virtual environment directly without relying on PyInstaller to extract it at runtime.

Note that bundling dependencies as a resource may require additional configuration and setup within your Tauri project. You may need to adjust how your Tauri application initializes or accesses the bundled dependencies to ensure they are used correctly.

It's important to consult the Tauri documentation and consider the specific requirements and recommendations for bundling resources within a Tauri application. The exact steps and configurations may vary depending on your project's setup and needs.
```

Getting Stared with LLamaIndex
"persisting to memory"
https://gpt-index.readthedocs.io/en/latest/getting_started/starter_example.html

Try Using GPt4All Locally?
https://gpt4all.io/index.html

Use ChromaDB with Langchain
Pure Python Implementation
https://docs.trychroma.com/getting-started

Persisted Chroma Embeddings
https://github.com/hwchase17/chroma-langchain/blob/master/persistent-qa.ipynb

maybe the idea is to store everything in [[NDJSON]]

- [ ] write and save file to ipfs
- [ ] send messages via libp2
- [ ] backup messages via ipfs
- [ ] encrypt everything
- [ ] create everything as a vector taht can be searched
- [ ]
